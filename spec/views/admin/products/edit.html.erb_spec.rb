require 'rails_helper'

RSpec.describe "admin/products/edit", type: :view do
  before(:each) do
    @admin_product = assign(:admin_product, Admin::Product.create!(
      name: "MyString",
      desc: "MyText",
      category: nil
    ))
  end

  it "renders the edit admin_product form" do
    render

    assert_select "form[action=?][method=?]", admin_product_path(@admin_product), "post" do

      assert_select "input[name=?]", "admin_product[name]"

      assert_select "textarea[name=?]", "admin_product[desc]"

      assert_select "input[name=?]", "admin_product[category_id]"
    end
  end
end
