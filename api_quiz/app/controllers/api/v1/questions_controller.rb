module Api::V1
  class QuestionsController < ApiController
    before_action :set_question, only: [:show, :update, :destroy]

    def index
      @questions = Question.all

      render json: @questions
    end

    def create
      @question = Question.new(question_params)

      if @question.save
        render json: @question, status: :created
      else
        render json: @question.errors, status: :unprocessable_entity
      end
    end

    def update
      if @question.update(question_params)
        render json: @question
      else
        render json: @question.errors, status: :unprocessable_entity
      end
    end

    def check_answer
      data = params[:question]
      result = []
      data.each do |d|
        find_answer = Question.find(d[:id]).answer
        if find_answer == d[:answer] || find_answer.to_i.to_words == d[:answer].to_i.to_words ||  find_answer.to_i.to_words == d[:answer] || find_answer == d[:answer].to_i.to_words
          result.push(Question.find(d[:id]))
        end
      end

      render json: ApiDataHelper.make_json_data(0, result)
    end

    def destroy
      @question.destroy
    end

    private

      # Use callbacks to share common setup or constraints between actions.
      def set_question
        @question = Question.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def question_params
        params.require(:question).permit(:question,:answer)
      end
  end
end