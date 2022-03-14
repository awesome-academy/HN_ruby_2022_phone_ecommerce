class ProductDetailSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :screen, :system, :rear_camera, :front_camera, :RAM,
             :CPU, :SIM, :battery_capacity, :quantity, :cost,
             :product_color_id, :product_size_id, :uri_image

  def uri_image
    image = object.image
    rails_blob_path(image, only_path: true) if image.attached?
  end
end
