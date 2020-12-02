class Schedule < ApplicationRecord

  belongs_to :user
  
  def self.search(search, id)
    Schedule.where('title LIKE(?) OR memo LIKE(?)', "%#{search}%", "%#{search}%").where(user_id: id)
  end

end
