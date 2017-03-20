json.array! @tags.each do |tag|
  json.tag tag.tag
end
