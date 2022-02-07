json.extract! admin_product_detail, :id, :screen, :system, :rear_camera, :front_camera, :RAM, :CPU, :SIM, :battery_capacity, :quantity, :cost, :product_id, :product_color_id, :product_size_id, :created_at, :updated_at
json.url admin_product_detail_url(admin_product_detail, format: :json)
