class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.text :desc
      t.string :email
      t.string :address
      t.string :phone
      t.integer :role, limit: 1

      t.timestamps
    end
  end
end
