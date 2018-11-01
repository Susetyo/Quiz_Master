require 'rails_helper'

# Test suite for the Question model
RSpec.describe Question, type: :model do
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:question) }
  it { should validate_presence_of(:answer) }
end