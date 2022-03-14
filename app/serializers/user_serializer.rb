class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :desc, :address, :phone
end
