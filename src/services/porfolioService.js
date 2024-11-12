'use strict';

import Portfolio from '../models/Portfolio.js';

export const createPortfolio = async (portfolioData) => {
    const portfolio = new Portfolio(portfolioData);
    return await portfolio.save();
}

export const calculatePortfolioIndicators = (portfolio) => {
    const totalValue = potfolio.assets.reduce((sum, asset) => {
        return sum + asset.units * asset.investment; 
    }, 0);

    const assetsWithIndicators = portfolio.asset.map(asset => {
        const marketValue = asset.units * asset.investment; // suponoendo que el precio actual es el precio de inversion
        const percentageOfPorftolio = ((marketValue / totalValue) * 100).toFixed(2);
        const  profitLoss = (marketValue - (asset.units * asset.investment)).toFixed(2);
        const appreciation = ((profitLoss / (asset.units * asset.investment)) * 100).toFixed(2);
    
        return {
            ...asset.toObject(),
            percentageOfPorftolio,
            marketValue: marketValue.toFixed(2),
            profitLoss,
            appreciation
        };
    });

    return {
        totalValue: totalValue.toFixed(2),
        assets: assetsWithIndicators
    };
};
