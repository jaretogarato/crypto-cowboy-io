class CreateLeads < ActiveRecord::Migration[5.1]
  def change
    create_table :leads do |t|
      t.string :title
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.text :message

      t.timestamps
    end
  end
end