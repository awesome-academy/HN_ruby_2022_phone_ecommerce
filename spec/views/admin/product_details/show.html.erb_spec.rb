require 'rails_helper'

RSpec.describe "admin/product_details/show", type: :view do
  before(:each) do
    @admin_product_detail = assign(:admin_product_detail, Admin::ProductDetail.create!(
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
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Screen/)
    expect(rendered).to match(/System/)
    expect(rendered).to match(/Rear Camera/)
    expect(rendered).to match(/Front Camera/)
    expect(rendered).to match(/Ram/)
    expect(rendered).to match(/Cpu/)
    expect(rendered).to match(/Sim/)
    expect(rendered).to match(/Battery Capacity/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/9.99/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
