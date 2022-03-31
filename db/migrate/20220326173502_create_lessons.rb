class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.string :test_case_file
      t.string :title
      t.string :image
      t.string :short_description
      t.string :task

      t.timestamps
    end
  end
end
