require 'sinatra'
require 'json'
require 'pry'

get '/' do
  "Fake it, 'til they make it!"
end


get '/basket' do
  content_type :json
  basket = File.read('./data/basket.json')
  JSON.parse(basket).to_json
end