class CreateJwtblacklists < ActiveRecord::Migration[6.0]
  def change
    create_table :jwtblacklists do |t|
      t.string :jti
      t.datetime :exp

      t.timestamps
    end
    add_index :jwtblacklists, :jti
  end
end
