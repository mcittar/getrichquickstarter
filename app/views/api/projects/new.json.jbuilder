json.set! @project.id do
  json.extract! @project, :id, :title, :city, :state, :end_date,
                :organization, :project_pic, :short_description
  json.user @project.user.name
end
