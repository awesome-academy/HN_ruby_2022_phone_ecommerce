module API
  module V1
    class Products < Grape::API
      include API::V1::Defaults

      helpers do
        def find_product_detail product, product_detail_id
          if product_detail_id.present?
            return product.product_details.find_by(id: product_detail_id)
          end

          product.product_details.first
        end
      end

      resource :products do
        desc "show all products"
        get "", root: :products do
          present Product.order_created_at
        end

        desc "show products"
        params do
          requires :id, type: String
          optional :product_detail_id,
                   type: String,
                   default: nil
        end
        get ":id", root: :products do
          product = Product.find_by(id: params[:id])
          api_error!(t("api.v1.invalid_id")) unless product

          present :product, product
          present :product_detail,
                  find_product_detail(product, params[:product_detail_id])
        end
      end
    end
  end
end
