class Admin::ProductDetailsController < ApplicationController
  layout "admin/layouts/application"
  before_action :set_admin_product_detail, except: %i(new create)
  before_action :check_role_admin

  def show; end

  def new
    if params[:product_id] &&
       (@product = Product.find_by id: params[:product_id])
      @admin_product_detail = @product.product_details.build
    else
      handle_product_detail_fail
    end
  end

  def edit; end

  def create
    @admin_product_detail = ProductDetail.new admin_product_detail_params
    @admin_product_detail.image.attach params[:product_detail][:image]

    create_respond_to
  end

  def update
    respond_to do |format|
      if @admin_product_detail.update(admin_product_detail_params)
        format.html do
          redirect_to admin_product_detail_url(@admin_product_detail),
                      notice: t("admin.product_details.updated_success")
        end
        format.json do
          render :show, status: :ok, location: @admin_product_detail
        end
      else
        format.html{render :edit, status: :unprocessable_entity}
        format.json do
          render json: @admin_product_detail.errors,
                 status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    product = @admin_product_detail.product
    if @admin_product_detail.destroy
      respond_to do |format|
        format.html do
          redirect_to admin_product_url(product),
                      notice: t("admin.product_details.destroyed_success")
        end
        format.json{head :no_content}
      end
    else
      handle_product_detail_fail
    end
  end

  private
  def set_admin_product_detail
    handle_product_detail_fail unless
      @admin_product_detail = ProductDetail.find_by(id: params[:id])
  end

  def admin_product_detail_params
    params.require(:product_detail).permit ProductDetail::PRODUCT_DETAIL_ATTRS
  end

  def handle_product_detail_fail
    flash[:danger] = t "admin.product_details.fail_product_detail"
    redirect_to root_url
  end

  def create_respond_to
    respond_to do |format|
      if @admin_product_detail.save
        format.html do
          redirect_to admin_product_detail_url(@admin_product_detail),
                      notice: t("admin.product_details.created_success")
        end
        format.json do
          render :show, status: :created, location: @admin_product_detail
        end
      else
        format.html{render :new, status: :unprocessable_entity}
        format.json do
          render json: @admin_product_detail.errors,
                 status: :unprocessable_entity
        end
      end
    end
  end
end
