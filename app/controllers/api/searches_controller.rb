class Api::SearchesController < ApplicationController

  def index
    @projects = Project.search(params[:filter])
    render :index
  end

end
