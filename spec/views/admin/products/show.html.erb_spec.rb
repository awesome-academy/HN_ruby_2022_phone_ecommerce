require 'rails_helper'

RSpec.describe "admin/products/show", type: :view do
  before(:each) do
    @admin_product = assign(:admin_product, Admin::Product.create!(
      name: "Name",
      desc: "MyText",
      category: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(//)
  end
end
