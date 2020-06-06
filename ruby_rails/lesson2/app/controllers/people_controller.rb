class PeopleController < ApplicationController
  layout 'people'

  def index
    @msg = 'Person data.'
    @data = Person.all
  end

  def show
    @msg = 'Indexed data.'
    @data = Person.find(params[:id])
  end

  def add
    @msg = 'add new data.'
    @person = Person.new
  end

  def create
    @person = Person.new person_params
    if @person.save then
      redirect_to '/people'
    else
      render 'add'
    end
  end

  def edit
    @msg = "edit data.[id = " + params[:id] + "]"
    @person = Person.find(params[:id])
  end

  def update
    obj = Person.find(params[:id])
    obj.update(person_params)
    redirect_to '/people'
  end

  def delete
    obj = Person.find(params[:id])
    obj.destroy
    redirect_to '/people'
  end

  def find
    @msg = 'please type search word...'
    @people = Array.new
    if request.post? then
      # idで検索
      # @people = Person.find(params[:find])

      # whereで検索1
      # @people = Person.where(name: params[:find])

      # whereで検索2
      # @people = Person.where("age >= ?", params[:find])

      # likeで検索
      # @people = Person.where("name like ?", "%" + params[:find] + "%")

      # AND検索
      # f = params[:find].split(',')
      # @people = Person.where("age >= ? and age <= ?", f[0], f[1])

      # OR検索
      # f = "%" + params[:find] + "%"
      # @people = Person.where("name like ? or mail like ?", f, f)

      # first, last
      # f = "%" + params[:find] + "%"
      # result = Person.where("name like ?", f)
      # @people.push(result.first)
      # @people.push(result.last)

      # idで検索(複数) + order
      # f = "%" + params[:find] + "%"
      # @people = Person.where('name like ?', f).order 'age asc'
      
      # limitとoffset
      f = params[:find].split(',')
      @people = Person.all.limit(f[0]).offset(f[1])
      
    else
      @people = Person.all
    end
  end
  
  private
  def person_params
    params.require(:person).permit(:name, :age, :mail)
  end
end
