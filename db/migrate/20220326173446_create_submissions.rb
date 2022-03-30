class CreateSubmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :submissions do |t|
      t.integer :coder_id
      t.integer :lesson_id
      t.string :code_solution

      t.timestamps
    end
  end
end
