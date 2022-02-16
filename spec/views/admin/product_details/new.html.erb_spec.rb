require 'rails_helper'

RSpec.describe "admin/product_details/new", type: :view do
  before(:each) do
    assign(:admin_product_detail, Admin::ProductDetail.new(
      screen: "MyString",
      system: "MyString",
      rear_camera: "MyString",
      front_camera: "MyString",
      RAM: "MyString",
      CPU: "MyString",
      SIM: "MyString",
      battery_capacity: "MyString",
      quantity: 1,
      cost: "9.99",
      product: nil,
      product_color: nil,
      product_size: nil
    ))
  end

  it "renders new admin_product_detail form" do
    render

    assert_select "form[action=?][method=?]", admin_product_details_path, "post" do

      assert_select "input[name=?]", "admin_product_detail[screen]"

      assert_select "input[name=?]", "admin_product_detail[system]"

      assert_select "input[name=?]", "admin_product_detail[rear_camera]"

      assert_select "input[name=?]", "admin_product_detail[front_camera]"

      assert_select "input[name=?]", "admin_product_detail[RAM]"

      assert_select "input[name=?]", "admin_product_detail[CPU]"

      assert_select "input[name=?]", "admin_product_detail[SIM]"

      assert_select "input[name=?]", "admin_product_detail[battery_capacity]"

      assert_select "input[name=?]", "admin_product_detail[quantity]"

      assert_select "input[name=?]", "admin_product_detail[cost]"

      assert_select "input[name=?]", "admin_product_detail[product_id]"

      assert_select "input[name=?]", "admin_product_detail[product_color_id]"

      assert_select "input[name=?]", "admin_product_detail[product_size_id]"
    end
  end
end
