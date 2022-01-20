require 'rails_helper'

RSpec.describe "StaticPages", type: :request do

  describe "GET /home" do
    it "returns http success" do
      get "/static_pages/home"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /cart" do
    it "returns http success" do
      get "/static_pages/cart"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /checkout" do
    it "returns http success" do
      get "/static_pages/checkout"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /shop" do
    it "returns http success" do
      get "/static_pages/shop"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /product" do
    it "returns http success" do
      get "/static_pages/product"
      expect(response).to have_http_status(:success)
    end
  end

end
