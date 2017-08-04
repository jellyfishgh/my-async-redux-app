import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
  static propTypes = {
    loadingLabel: PropTypes.string.isRequired,
    pageCount: PropTypes.number,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    nextPageUrl: PropTypes.string,
    onLoadMoreClick: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired
  }
  render() {
    const {
      loadingLabel = '加载中...',
      pageCount,
      items,
      isFetching = true,
      nextPageUrl,
      onLoadMoreClick,
      renderItem
    } = this.props
    const isEmpty = items.length === 0
    const isLastPage = !nextPageUrl
    if (isEmpty && (isFetching || isLastPage))
      return (
        <h2>
          <i>
            {isFetching ? loadingLabel : isLastPage ? '无内容' : ''}
          </i>
        </h2>
      )
    return (
      <div>
        {items.map(renderItem)}
        {pageCount > 0 &&
          !isLastPage &&
          <button
            style={{
              fontSize: '150%'
            }}
            onClick={onLoadMoreClick}
            disabled={isFetching}
          >
            {isFetching ? loadingLabel : '加载更多'}
          </button>}
      </div>
    )
  }
}
