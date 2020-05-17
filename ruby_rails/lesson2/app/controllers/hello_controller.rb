class HelloController < ApplicationController
    # protect_from_forgery

    def index
        # render plain: "Hello, This is Rails sample page!"

        # if params['msg'] != nil then
        #     msg = 'Hello, ' + params['msg'] + '!'
        # else
        #     msg = 'this is sample page'
        # end

        # html = '
        # <html>
        # <head>
        # <title>test</title>
        # </head>
        # <body>
        #   <h1>Sample Page</h1>
        #   <p>' + msg + '</p>
        # </body>
        # </html>
        # '
        # render html: html.html_safe

        # if params['msg'] != nil then
        #     @title = params['msg']
        # else
        #     @title = 'index'
        # end
        # @msg = 'this is redirect sample...'

        if request.post? then
            @title = 'Result'
            @msg = 'you typed: ' + params['input1'] + '.'
            @value = params['input1']
        else
            @title = 'index'
            @msg = 'type text...'
            @value = ''
        end
    end

    def other
        redirect_to action: :index, params:{'msg': 'from other page'}
    end
end
