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
      json.title reward.title
      json.amount reward.amount
      json.limit reward.limit
      json.description reward.description
      json.delivery_date reward.delivery_date
    end
  end
end
