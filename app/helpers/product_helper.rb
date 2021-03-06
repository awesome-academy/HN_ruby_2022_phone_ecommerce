module ProductHelper
  def get_selects_from_entities entities
    selects = entities.map do |entity|
      [entity.name, entity.id]
    end

    selects.push [t(".all"), Settings.default_option_all]
  end

  def get_selects_from_array array
    array.push [t(".all"), Settings.default_option_all]
  end

  def get_default_option name_param
    return Settings.default_option_all unless params[name_param]

    params[name_param]
  end

  def create_custom_options_costs cost_millions, message_front
    cost_millions.map do |value|
      ["#{message_front} #{value} #{t '.million'}", value * Settings.unit_cost]
    end
  end

  def number_of_reviewers product, number_of_stars
    Rate.count_reviews_with_stars(product.id, number_of_stars).size
  end

  def percent_of_vote product, number_of_stars
    number_of_reviewers(product, number_of_stars) *
      Settings.all_percent / product.rates.size
  end
end
