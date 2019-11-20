import TTFGlyph from './TTFGlyph';
import r from 'restructure';

export default class CBDTGlyph extends TTFGlyph {
	getBitmapSizeTable(size) {
		const cblc = this._font.CBLC,
			rightSizeTable = cblc.sizes.find(table => table.ppemX > size),
			largestTable = cblc.sizes[cblc.sizes.length - 1],
			bitmapSizeTable = rightSizeTable || largestTable;

		return bitmapSizeTable;
	}
	getImageForSize(size) {
		throw new Error('not supported yet');
	}
	render(ctx, size) {
		throw new Error('not supported yet');
	}

}
