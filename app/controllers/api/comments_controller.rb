class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @project = Project.find(@comment.project_id)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 403
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :project_id, :body)
  end

end
