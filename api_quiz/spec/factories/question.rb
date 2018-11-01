FactoryBot.define do
  factory :question do
    question { Faker::Lorem.word }
    answer { Faker::Lorem.word }
  end
end