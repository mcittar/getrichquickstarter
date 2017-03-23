json.extract! @project, :id, :title, :city, :state, :end_date,
              :organization, :project_pic, :short_description,
              :description, :video_url, :funding_goal, :tags
json.user @project.user.username

json.tags @project.tags do |tag|
  json.tag tag.tag
end

json.rewards do
  @project.rewards.each do |reward|
    json.set! reward.id do
      json.id reward.id
      json.title reward.title
      json.amount reward.amount
      json.limit reward.limit
      json.description reward.description
      json.delivery_date reward.delivery_date
    end
  end
end

backers = {}
backers_count = 0
@project.backers.each do |backer|
  if backers[backer[:username]].nil?
    backers[backer[:username]] = true
    backers_count += 1
  end
end
json.backers backers_count

sum_contributions = 0
@project.contributions.each do |contribution|
  sum_contributions += contribution.amount
end
json.contributions sum_contributions

new_goal = @project.funding_goal.to_f
percentage = ((sum_contributions / new_goal) * 100)
percentage = percentage > 100 ? '100' : percentage.round.to_s
json.percentage percentage
