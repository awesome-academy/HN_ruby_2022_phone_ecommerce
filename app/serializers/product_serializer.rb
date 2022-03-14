class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :category_id, :avg_cost,
             :uri_first_image

  def avg_cost
    return Settings.default_cost if object.product_details.blank?

    object.product_details.average(:cost).to_f
  end

  def uri_first_image
    object.product_details.each do |product_detail|
      image = product_detail.image
      return rails_blob_path(image, only_path: true) if image.attached?
    end
    nil
  end
end
