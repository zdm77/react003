<?php
namespace App\Http\Controllers;
use App\Product;
use Illuminate\Http\Request;
class ProductController extends Controller
{
    /**
     * Отображение из ресурса.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::orderBy('name')
            ->get();
        return response()->json($products);
    }
    /**
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    /**
     * Сохранение нового
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Product([
            'name' => $request->get('name'),
            'price' => $request->get('price')
        ]);
        $product->save();
        return response()->json('Successfully added');
    }
    /**
     *
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }
    /**
     * Показ при редактировании
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }
    /**
     * Обновление
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->get('name');
        $product->price = $request->get('price');
        $product->save();
        return response()->json('Successfully Updated');
    }
    /**
     * Удаление
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json('Successfully Deleted');
    }
}
