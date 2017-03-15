@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :city, :state,
                  :organization, :project_pic, :description
    json.user project.user.name
  end
end
