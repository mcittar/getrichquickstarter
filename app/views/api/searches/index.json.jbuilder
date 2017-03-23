
@projects.each do |project|

  all_funding = 0
  project.contributions.each do |contribution|
    all_funding += contribution[:amount]
  end

  new_goal = project.funding_goal.to_f
  percentage = ((all_funding / new_goal) * 100)
  line_percentage = percentage > 100 ? '100' : percentage.round.to_s
  percentage_show = percentage.round.to_s


  json.set! project.id do
    json.extract! project, :id, :title, :city, :state, :end_date,
                  :organization, :project_pic, :short_description
    json.percentage_show percentage_show
    json.line_percentage line_percentage
    json.contributions all_funding
  end
end
