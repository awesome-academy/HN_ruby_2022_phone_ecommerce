require 'rails_helper'

RSpec.describe "admin/products/index", type: :view do
  before(:each) do
    assign(:admin_products, [
      Admin::Product.create!(
        name: "Name",
        desc: "MyText",
        category: nil
      ),
      Admin::Product.create!(
        name: "Name",
        desc: "MyText",
        category: nil
      )
    ])
  end

  it "renders a list of admin/products" do
    render
    assert_select "tr>td", text: "Name".to_s, count: 2
    assert_select "tr>td", text: "MyText".to_s, count: 2
    assert_select "tr>td", text: nil.to_s, count: 2
  end
end
