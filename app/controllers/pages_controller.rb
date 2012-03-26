class PagesController < ApplicationController
def create_tweet
  respond_to do |format|
    format.js
  end
end

def follow
 respond_to do |format|
    format.js
  end
end

end
