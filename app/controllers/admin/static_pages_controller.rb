class Admin::StaticPagesController < ApplicationController
  layout "admin/layouts/application"
  before_action :check_role_admin, only: :home
  def home; end
end
