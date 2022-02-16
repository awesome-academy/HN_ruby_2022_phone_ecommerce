require 'rails_helper'

RSpec.describe "admin/product_details/index", type: :view do
  before(:each) do
    assign(:admin_product_details, [
      Admin::ProductDetail.create!(
        screen: "Screen",
        system: "System",
        rear_camera: "Rear Camera",
        front_camera: "Front Camera",
        RAM: "Ram",
        CPU: "Cpu",
        SIM: "Sim",
        battery_capacity: "Battery Capacity",
        quantity: 2,
        cost: "9.99",
        product: nil,
        product_color: nil,
        product_size: nil
      ),
      Admin::ProductDetail.create!(
        screen: "Screen",
        system: "System",
        rear_camera: "Rear Camera",
        front_camera: "Front Camera",
        RAM: "Ram",
        CPU: "Cpu",
        SIM: "Sim",
        battery_capacity: "Battery Capacity",
        quantity: 2,
        cost: "9.99",
        product: nil,
        product_color: nil,
        product_size: nil
      )
    ])
  end

  it "renders a list of admin/product_details" do
    render
    assert_select "tr>td", text: "Screen".to_s, count: 2
    assert_select "tr>td", text: "System".to_s, count: 2
    assert_select "tr>td", text: "Rear Camera".to_s, count: 2
    assert_select "tr>td", text: "Front Camera".to_s, count: 2
    assert_select "tr>td", text: "Ram".to_s, count: 2
    assert_select "tr>td", text: "Cpu".to_s, count: 2
    assert_select "tr>td", text: "Sim".to_s, count: 2
    assert_select "tr>td", text: "Battery Capacity".to_s, count: 2
    assert_select "tr>td", text: 2.to_s, count: 2
    assert_select "tr>td", text: "9.99".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
