module API
  module V1
    class Users < Grape::API
      include API::V1::Defaults

      helpers do
        def handle_fail
          api_error! I18n.t "api.v1.handle_failure"
        end
      end

      resource :user do
        desc "create user"
        params do
          requires :user, type: JSON do
            requires :email, type: String
            optional :name, type: String
            optional :desc, type: String
            optional :address, type: String
            optional :phone, type: String
            requires :password
            requires :password_confirmation
          end
        end
        post "", root: :user do
          if User.create(declared(params)["user"])
            present success: I18n.t("api.v1.create_user_success")
          else
            handle_fail
          end
        end
      end

      resource :user do
        before do
          authenticate_user!
        end
        desc "show user"
        get "", root: :user do
          present @current_user
        end

        desc "update information user"
        params do
          requires :user, type: JSON do
            optional :email, type: String
            optional :name, type: String
            optional :desc, type: String
            optional :address, type: String
            optional :phone, type: String
          end
        end
        patch "", root: :user do
          if @current_user.update(declared(params)["user"])
            present success: I18n.t("api.v1.update_user_success")
          else
            handle_fail
          end
        end
      end

      resource :user do
        desc "delete user"
        delete "", root: :user do
          if @current_user.destroy
            present success: I18n.t("api.v1.delete_user_success")
          else
            handle_fail
          end
        end
      end
    end
  end
end
