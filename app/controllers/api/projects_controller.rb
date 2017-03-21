require 'byebug'

class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render :index
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render :new
    else
      render json: @project.errors.full_messages, status: 422
    end

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
    params.require(:project).permit(:reward_attributes, :id, :creator_id, :city, :state, :title,
                                    :organization, :video_url, :project_pic,
                                    :description, :funding_goal, :end_date,
                                    :short_description)
  end

end
