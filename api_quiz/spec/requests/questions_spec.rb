require 'rails_helper'

RSpec.describe 'Questions API', type: :request do
	
	#initialize test data
	let!(:questions){ create_list(:question,10) }
	let(:question_id){ questions.first.id }

	describe 'GET /api/v1/questions' do
		before { get '/api/v1/questions' }

		it 'returns questions' do
			expect(json).not_to be_empty
			expect(json.size).to eq(10)
		end

		it 'returns status code 200' do
			expect(response).to have_http_status(200)
		end
	end 

	describe 'POST /api/v1/questions' do
		let(:valid_attributes){{question:{question: 'How old are you ?',answer: '24'}}}

		context 'when the request is valid' do
			before { post '/api/v1/questions', params: valid_attributes }

			it 'creates a question' do
				expect(json['question']).to eq('How old are you ?')
			end

			it 'returns status code 201' do
				expect(response).to have_http_status(201)
			end
		end

		context 'when the request is invalid' do
			before { post '/api/v1/questions', params:{question:{ question:'How old are u?' }} }

			it 'returns status code 422' do
				expect(response).to have_http_status(422)
			end
			
			it 'returns a validation failure message' do
				expect(JSON.parse(response.body))
					.to match({"answer"=>["can't be blank"]})
			end
		end
	end

	describe 'PUT /api/v1/question/:id' do
		let(:valid_attributes) {{question:{question: 'What is your name?'}}}

		context 'When update record' do
			before { put "/api/v1/questions/#{question_id}", params: valid_attributes }

			it 'updates the record' do
				expect(response.body).not_to be_empty
			end

			it 'returns status code 200' do
				expect(response).to have_http_status(200)
			end
		end
	end

	describe 'DELETE /api/v1/questions/:id' do
		before {delete "/api/v1/questions/#{question_id}"}

		it 'returns status code 204' do
			expect(response).to have_http_status(204)
		end
	end

end