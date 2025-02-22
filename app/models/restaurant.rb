class Restaurant < ApplicationRecord
  belongs_to :category
  validates :name, :address, presence: true
end
