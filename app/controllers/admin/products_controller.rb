class Admin::ProductsController < ApplicationController
  layout "admin/layouts/application"
  before_action :set_admin_product, except: %i(index new create)
  before_action :check_role_admin

  def index
    @admin_products = Product.all
    @pagy, @admin_products = pagy @admin_products
  end

  def show
    @admin_product_details = @admin_product.product_details
    @pagy, @admin_product_details = pagy @admin_product_details
  end

  def new
    @admin_product = Product.new
  end

  def edit; end

  def create
    @admin_product = Product.new admin_product_params

    respond_to do |format|
      if @admin_product.save
        format.html do
          redirect_to admin_product_url(@admin_product),
                      notice: t("admin.products.created_success")
        end
        format.json{render :show, status: :created, location: @admin_product}
      else
        format.html{render :new, status: :unprocessable_entity}
        format.json do
          render json: @admin_product.errors,
                 status: :unprocessable_entity
        end
      end
    end
  end

  def update
    respond_to do |format|
      if @admin_product.update(admin_product_params)
        format.html do
          redirect_to admin_product_url(@admin_product),
                      notice: t("admin.products.updated_success")
        end
        format.json{render :show, status: :ok, location: @admin_product}
      else
        format.html{render :edit, status: :unprocessable_entity}
        format.json do
          render json: @admin_product.errors,
                 status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    if @admin_product.destroy
      respond_to do |format|
        format.html do
          redirect_to admin_products_url,
                      notice: t("admin.products.destroyed_success")
        end
        format.json{head :no_content}
      end
    else
      handle_product_fail
    end
  end

  private
  def set_admin_product
    handle_product_fail unless
      @admin_product = Product.find_by(id: params[:id])
  end

  def admin_product_params
    params.require(:product).permit :name, :desc, :category_id
  end

  def handle_product_fail
    flash[:danger] = t "admin.products.fail_product"
    redirect_to root_url
  end
end
