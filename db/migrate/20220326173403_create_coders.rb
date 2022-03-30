class CreateCoders < ActiveRecord::Migration[6.1]
  def change
    create_table :coders do |t|
      t.string :name
      t.integer :age
      t.string :country
      t.string :password_digest

      t.timestamps
    end
  end
end
