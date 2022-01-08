class HelloController < ApplicationController
    # laytouts/hello.html.erb を指定する
    layout 'hello'

    def index
        @header = 'layout sample'
        @footer = 'copyright SYODA-Tuyano 2020.'
        @title = 'New Layout'
        @msg = 'this is sample page!'
    end
end
