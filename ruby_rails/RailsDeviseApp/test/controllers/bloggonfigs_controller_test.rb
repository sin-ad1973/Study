require 'test_helper'

class BloggonfigsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bloggonfigs_index_url
    assert_response :success
  end

  test "should get edit" do
    get bloggonfigs_edit_url
    assert_response :success
  end

end
