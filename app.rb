require 'sinatra'

get '/' do
  # rows = [["", "", "X"], ["O", "O", "X"], ["X", "", ""]]
  # rows = [["", "", "O", "X"], ["O", "", "X", ""], ["", "X", "", "O"], ["X", "", "O", ""]]
  # rows = [["O", "", "O", "X", ""], ["O", "", "X", "", "O"], ["", "", "X", "", "O"], ["X", "", "O", "O", ""], ["", "O", "X", "", "O"]]
  rows = [["", "O", "", "O", "X", ""], ["O", "", "", "X", "", "O"], ["X", "", "", "X", "", "O"], ["X", "", "O", "", "O", ""], ["O", "", "O", "X", "", "O"], ["", "X", "", "", "X", "O"]]
  erb :table, locals: {rows: rows}
end

post '/board_index' do
  board_index = params[:board_index]
  "Selected board index: #{board_index}"
end