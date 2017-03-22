@projects.each do |project|

  all_funding = 0
  project.contributions.each do |contribution|
    all_funding += contribution[:amount]
  end

  json.set! project.id do
    json.extract! project, :id, :title, :city, :state, :end_date,
                  :organization, :project_pic, :short_description
    json.contributions all_funding
  end
end
