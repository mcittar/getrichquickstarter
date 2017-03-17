class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render :index
  end

  def create

  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def edit

  end

  def delete

  end

  private

  def project_params
    params.require(:project).permit(:id, :creator_id, :city, :state, :title,
                                    :organization, :video_url, :project_pic,
                                    :description, :funding_goal, :end_date,
                                    :short_description)
  end

end