require 'rails_helper'

RSpec.describe "admin/products/new", type: :view do
  before(:each) do
    assign(:admin_product, Admin::Product.new(
      name: "MyString",
      desc: "MyText",
      category: nil
    ))
  end

  it "renders new admin_product form" do
    render

    assert_select "form[action=?][method=?]", admin_products_path, "post" do

      assert_select "input[name=?]", "admin_product[name]"

      assert_select "textarea[name=?]", "admin_product[desc]"

      assert_select "input[name=?]", "admin_product[category_id]"
    end
  end
end
