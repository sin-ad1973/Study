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
            @msg = 'you typed: ' + params['input1'] + '. '
            @value = params['input1']

            if params['check1'] then
                @msg += 'you checked. '
            else
                @msg += 'you not checked... '
            end

            if params['r1'] then
                @msg += 'you checked(radio):' + params['r1'] + '. '
            else
                @msg += 'you not checked(radio)... '
            end

            if params['s1'] then
                @msg += 'you select:' + params['s1'] + '. '
            else
                @msg += 'you not select... '
            end

            if params['s2'] then
                @msg += 'you select(multi);'
                for val in params['s2']
                    @msg += val + ','
                end
            else
                @msg += 'you not select(multi)...'
            end
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
