json.array! @schedules.order('date ASC') do |schedule|
  json.id schedule.id
  json.date schedule.date.strftime('%Y年%m月%d日')
  json.title schedule.title
  json.category schedule.category
  json.memo schedule.memo
  json.user_id schedule.user_id
  json.user_sign_in current_user
end